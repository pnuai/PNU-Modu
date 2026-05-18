import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Columns, { Col } from '@site/src/components/Columns';
import Highlight from '@site/src/components/Highlight';
import HeroButton from '@site/src/components/HeroButton';
import Callout from '@site/src/components/Callout';
import { StepList, StepItem } from '@site/src/components/StepList';
import Details from '@site/src/components/Details';
import Text from '@site/src/components/Text';
import {
  HeroSection,
  StatsSection,
  CardsSection,
  TimelineSection,
  QuoteSection,
  CTASection,
  ChaptersSection,
  RoadmapSection,
  BadgesSection,
} from '@site/src/components/BrochureBlocks';

// 모든 .md / .mdx 파일에서 import 없이 바로 사용 가능
export default {
  ...MDXComponents,
  Columns,
  Col,
  Column: Col,
  Highlight,
  HeroButton,
  Callout,
  StepList,
  StepItem,
  Details,
  Text,
  
  // Brochure Directives & Components
  hero: HeroSection,
  stats: StatsSection,
  cards: CardsSection,
  timeline: TimelineSection,
  quote: QuoteSection,
  cta: CTASection,
  chapters: ChaptersSection,
  roadmap: RoadmapSection,
  badges: BadgesSection,
  HeroSection,
  StatsSection,
  CardsSection,
  TimelineSection,
  QuoteSection,
  CTASection,
  ChaptersSection,
  RoadmapSection,
  BadgesSection,
};
