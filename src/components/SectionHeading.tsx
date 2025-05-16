import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  centered?: boolean;
  isPageHeading?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedText,
  description,
  centered = true,
  isPageHeading = false,
}) => {
  // For page headings, we want to use h1 instead of h2
  const HeadingTag = isPageHeading ? 'h1' : 'h2';
  
  return (
    <div className={`${centered ? 'text-center' : ''} ${isPageHeading ? 'mb-4' : 'mb-16'}`}>
      {badge && (
        <div className="inline-block bg-mela-pink-50 text-mela-pink-500 px-4 py-1.5 rounded-full font-medium text-sm mb-3">
          {badge}
        </div>
      )}
      <HeadingTag className="text-3xl md:text-4xl font-bold text-mela-brown-700 mb-4">
        {title}{' '}
        {highlightedText && (
          <span className="text-mela-pink-500 relative">
            {highlightedText}
            <span className="absolute bottom-1 left-0 w-full h-2 bg-mela-pink-200 -z-10 transform -rotate-1"></span>
          </span>
        )}
      </HeadingTag>
      {description && (
        <p className={`text-mela-brown-600 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 