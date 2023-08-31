import MarkdownRenderer from '../Markdown/MarkdownRenderer';

interface IssueBodyContentProps {
  body: string | null | undefined;
}

const IssueBodyContent = ({ body }: IssueBodyContentProps) => {
  if (!body) return null;

  return <MarkdownRenderer content={body} />;
};

export default IssueBodyContent;
