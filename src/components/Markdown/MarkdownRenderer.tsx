import ReactMarkdown from 'react-markdown';
import { MarkDownContainer } from '../../constants/style';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <MarkDownContainer>
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkDownContainer>
  );
};

export default MarkdownRenderer;
