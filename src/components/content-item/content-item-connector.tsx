import {
  ContentItem,
  ContentItemMobile,
  ContentText,
  Subtitle,
  Title,
} from './ui';
import { useWindowWidth } from '../../hooks';

export type Props = {
  subtitleText: string;
  contentText: string;
  titleText: string;
  imgPosition?: 'left' | 'right';
};

export const ContentItemConnector = ({
  imgPosition,
  subtitleText,
  contentText,
  titleText,
}: Props) => {
  const width = useWindowWidth();

  return width < 1450 ? (
    <ContentItemMobile
      subtitleSlot={<Subtitle text={subtitleText} />}
      textSlot={<ContentText text={contentText} />}
      titleSlot={<Title text={titleText} />}
    />
  ) : (
    <ContentItem
      imgPosition={imgPosition || 'left'}
      subtitleSlot={<Subtitle text={subtitleText} />}
      textSlot={<ContentText text={contentText} />}
      titleSlot={<Title text={titleText} />}
    />
  );
};
