import React from "react";
import { Flex, Skeleton } from '@dynatrace/strato-components-preview';
import { Borders, BoxShadows, Colors } from '@dynatrace/strato-design-tokens';
import { Sankey } from "../components/Sankey";

interface CardProps {
  sankeyData: {
    nodes: { name: string; category: string }[];
    links: { source: string; target: string; value: number }[];
  };
  isLoading: boolean;
}

export const Card = ({ sankeyData,
                       isLoading,
                    }: CardProps) => {
  
  return <Flex
            style={{
              border: Colors.Border.Neutral.Default,
              borderRadius: Borders.Radius.Container.Subdued,
              background: Colors.Background.Surface.Default,
              boxShadow: BoxShadows.Surface.Raised.Rest,
              width: '95vw',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {isLoading &&
                sankeyData.nodes.length < 1 &&
                sankeyData.nodes.length < 1 &&
                <Skeleton />}
              {!isLoading &&
                (sankeyData.nodes.length < 1 ||
                  sankeyData.nodes.length < 1) &&
                <div style={{
                  padding: '25px'
                }}>⛔ No Data. Change filter.</div>}
              {!isLoading &&
                sankeyData.nodes.length > 0 &&
                sankeyData.nodes.length > 0 &&
                <Sankey data={sankeyData} width={1600} height={1200} />}
          </Flex>;
}