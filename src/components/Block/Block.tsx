import React from 'react';
import classNames from 'classnames';

interface BlockProps {
  className?: string;
}

const Block: React.FC<BlockProps> & {
  Head: typeof BlockHead;
  HeadContent: typeof BlockHeadContent;
  HeadBetween: typeof BlockHeadBetween;
  Title: typeof BlockTitle;
  Text: typeof BlockText;
} = ({ className, children }) => {
  const compClass = classNames({
    'nk-block': true,
    [className!]: className
  });
  return <div className={compClass}>{children}</div>;
};

interface BlockTitleProps extends BlockProps {
  tag?: keyof JSX.IntrinsicElements;
}

const BlockTitle: React.FC<BlockTitleProps> = ({
  className,
  tag,
  children
}) => {
  const Tag = tag || 'h1';
  const compClass = classNames({
    'nk-block-title': true,
    [className!]: className
  });
  return <Tag className={compClass}>{children}</Tag>;
};

interface BlockTextProps extends BlockProps {}

const BlockText: React.FC<BlockTextProps> = ({ className, children }) => {
  const compClass = classNames(className);
  return <p className={compClass}>{children}</p>;
};

interface BlockHeadProps extends BlockProps {
  page?: boolean;
}

const BlockHead: React.FC<BlockHeadProps> = ({ className, page, children }) => {
  const compClass = classNames({
    'nk-block-head': true,
    'nk-page-head': page,
    [className!]: className
  });
  return <div className={compClass}>{children}</div>;
};

interface BlockHeadBetweenProps extends BlockProps {
  gap?: number;
}

const BlockHeadBetween: React.FC<BlockHeadBetweenProps> = ({
  className,
  gap,
  children
}) => {
  const compClass = classNames({
    'nk-block-head-between flex-wrap': true,
    [`gap gap-${gap}`]: gap,
    [className!]: className
  });
  return <div className={compClass}>{children}</div>;
};

interface BlockHeadContentProps extends BlockProps {
  tools?: boolean;
}

const BlockHeadContent: React.FC<BlockHeadContentProps> = ({
  className,
  tools,
  children
}) => {
  const compClass = classNames({
    'nk-block-head-content': true,
    'nk-block-head-tools': tools,
    [className!]: className
  });
  return <div className={compClass}>{children}</div>;
};

export default Block;
export { BlockTitle, BlockText, BlockHead, BlockHeadBetween, BlockHeadContent };

Block.Head = BlockHead;
Block.HeadContent = BlockHeadContent;
Block.HeadBetween = BlockHeadBetween;
Block.Title = BlockTitle;
Block.Text = BlockText;
