
import React from 'react';
import { Artist, Track, Service, NewsItem } from './types';
import { Mic, Music, Globe, Smartphone, CreditCard, Radio, Star, TrendingUp } from 'lucide-react';

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'ELITE VIBE',
    genre: 'Afro-Fusion',
    image: 'https://picsum.photos/seed/elite/800/1000',
    bio: 'Pioneering the new sound of global Afro-beats with international collaborations.',
    featuredTrack: 'Sunrise Anthem'
  },
  {
    id: '2',
    name: 'LUNA RAY',
    genre: 'Modern Soul',
    image: 'https://picsum.photos/seed/luna/800/1000',
    bio: 'Soulful melodies meeting heavy electronic basslines.',
    featuredTrack: 'Midnight Whispers'
  },
  {
    id: '3',
    name: 'THE ARCHITECT',
    genre: 'Hip-Hop / Drill',
    image: 'https://picsum.photos/seed/arch/800/1000',
    bio: 'Mastermind lyricist pushing the boundaries of rhythm and poetry.',
    featuredTrack: 'Structure'
  }
];

export const TRACKS: Track[] = [
  { id: '1', title: 'Global Fire', artist: 'Elite Vibe', cover: 'https://picsum.photos/seed/t1/400/400', url: '#' },
  { id: '2', title: 'Solar Flare', artist: 'Luna Ray', cover: 'https://picsum.photos/seed/t2/400/400', url: '#' },
  { id: '3', title: 'Urbane', artist: 'The Architect', cover: 'https://picsum.photos/seed/t3/400/400', url: '#' }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Professional Mixing',
    description: 'World-class spatial audio mixing for your tracks.',
    price: 150,
    icon: 'Music'
  },
  {
    id: 's2',
    title: 'Global Distribution',
    description: 'Release to Spotify, Apple Music, and 150+ more platforms.',
    price: 49,
    icon: 'Globe'
  },
  {
    id: 's3',
    title: 'Vocal Recording',
    description: 'High-end studio time with expert engineers.',
    price: 80,
    icon: 'Mic'
  }
];

export const NEWS: NewsItem[] = [
  { id: 'n1', title: 'Universal Design Concept signs 3 new artists', date: 'Oct 24, 2024', image: 'https://picsum.photos/seed/n1/600/400', category: 'Announcement' },
  { id: 'n2', title: 'Elite Vibe hits 10M streams on Spotify', date: 'Oct 20, 2024', image: 'https://picsum.photos/seed/n2/600/400', category: 'Milestone' },
  { id: 'n3', title: 'New Studio Opening in Lagos', date: 'Oct 15, 2024', image: 'https://picsum.photos/seed/n3/600/400', category: 'Studio' }
];
