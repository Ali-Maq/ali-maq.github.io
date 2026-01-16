---
layout: page
title: Real-Time Voice Agent
description: Low-Latency Voice Pipeline (<600ms End-to-End)
img: assets/img/project_voice.png
importance: 6
category: engineering
---

## Overview

A real-time voice agent pipeline achieving **<600ms end-to-end latency** for conversational AI applications in clinical settings, featuring fine-tuned ASR and sophisticated voice activity detection.

## The Problem

Real-time voice interfaces require:
- **Low latency**: Users expect immediate responses
- **Domain accuracy**: Medical terminology needs specialized ASR
- **Natural interaction**: Support for interruptions and turn-taking

## Technical Approach

### ASR Fine-tuning
- Fine-tuned **OpenAI Whisper Large** on local voice data
- Domain-specific vocabulary for medical terminology
- Reduced word error rate for clinical conversations

### Voice Activity Detection
- **Silero VAD** for accurate speech detection
- WebSocket streaming for real-time processing
- Optimized for clinical audio environments

### Barge-in Handling
- User interruption detection and handling
- Graceful response truncation
- Natural conversation flow maintenance

## Results

| Metric | Value |
|--------|-------|
| End-to-End Latency | **<600ms** |
| ASR Accuracy | Domain-optimized |
| Barge-in Support | Full |
| Streaming | Real-time WebSocket |

## Architecture

```
Audio Input → Silero VAD (Speech Detection)
                    ↓
              WebSocket Stream
                    ↓
         Fine-tuned Whisper Large
                    ↓
              LLM Processing
                    ↓
              TTS Generation
                    ↓
         Audio Output (<600ms total)
```

## Key Features

- **WebSocket Streaming**: Real-time bidirectional audio
- **Voice Activity Detection**: Silero VAD with tuned thresholds
- **Barge-in Handling**: Natural conversation interruptions
- **Domain ASR**: Fine-tuned for medical vocabulary
- **Low Latency TTS**: Multiple TTS options (Piper, Cartesia)

## Technical Stack

```
ASR:            Fine-tuned Whisper Large
VAD:            Silero VAD
Streaming:      WebSocket, WebRTC
TTS:            Piper (custom), Cartesia
Voice AI:       Hume AI integration
Latency:        <600ms end-to-end
Languages:      Python, JavaScript
```

## Applications

- Clinical conversation interfaces
- Voice-controlled data entry
- Real-time transcription for clinical notes
- Accessible interfaces for healthcare providers
