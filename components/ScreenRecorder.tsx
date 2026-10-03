'use client';

import React, { useState, useRef } from 'react';
import { Video, Square, Download, CheckCircle2, Play } from 'lucide-react';

export default function ScreenRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlobUrl, setRecordedBlobUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: 'browser' },
        audio: true
      });

      streamRef.current = stream;
      const chunks: BlobPart[] = [];
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setRecordedBlobUrl(url);
        setIsRecording(false);
        if (timerRef.current) clearInterval(timerRef.current);
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start(1000);
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
      setRecordingTime(0);
      setRecordedBlobUrl(null);

      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

      // Handle user stopping screen share via browser UI
      stream.getVideoTracks()[0].onended = () => {
        stopRecording();
      };
    } catch (err) {
      console.warn('Recording cancelled or not supported:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex items-center gap-2">
      {!isRecording && !recordedBlobUrl && (
        <button
          onClick={startRecording}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all hover:border-rose-500/50"
          title="Record this tab directly to generate your YouTube 3-minute video file"
        >
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <span>Record Demo Video</span>
        </button>
      )}

      {isRecording && (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-200 text-xs font-bold animate-pulse">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
          <span>Recording: {formatTime(recordingTime)} (Max 3:00)</span>
          <button
            onClick={stopRecording}
            className="ml-2 px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-extrabold flex items-center gap-1"
          >
            <Square className="w-3 h-3 fill-white" />
            <span>Finish</span>
          </button>
        </div>
      )}

      {recordedBlobUrl && (
        <div className="flex items-center gap-2">
          <a
            href={recordedBlobUrl}
            download="agentmatch-3min-demo.webm"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-950/40 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Video File (.webm)</span>
          </a>
          <button
            onClick={() => setRecordedBlobUrl(null)}
            className="text-xs text-slate-400 hover:text-slate-200 underline"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
