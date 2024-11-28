// types/reactour.d.ts

declare module 'reactour' {
    import React from 'react';
  
    export type ReactourStepPosition =
      | 'top'
      | 'right'
      | 'bottom'
      | 'left'
      | 'top left'
      | 'top right'
      | 'bottom left'
      | 'bottom right'
      | [number, number];
  
    export interface ReactourStep {
      selector: string;
      content: React.ReactNode;
      position?: ReactourStepPosition;
      action?: () => void;
      style?: React.CSSProperties;
      stepInteraction?: boolean;
    }
  
    export interface TourStyles {
      mask?: React.CSSProperties;
      tooltip?: React.CSSProperties;
      button?: React.CSSProperties;
      close?: React.CSSProperties;
      highlighted?: React.CSSProperties;
      // Add other style keys as per reactour's API
    }
  
    export interface ReactourProps {
      isOpen: boolean;
      steps: ReactourStep[];
      onRequestClose: () => void;
      accentColor?: string;
      className?: string;
      maskClassName?: string;
      rounded?: boolean;
      styles?: TourStyles;
      // Add other props as needed
    }
  
    const Tour: React.FC<ReactourProps>;
  
    export default Tour;
  }
  