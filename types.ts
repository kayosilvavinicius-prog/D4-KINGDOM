import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ComparisonRow {
  feature: string;
  common: boolean | string;
  d4: boolean | string;
}