
import {
  FrameworkOverview,
  ResourcesCommunity
} from "./sections";

export const BlogContent = () => {
  return (
    <article className="prose prose-lg max-w-none prose-slate prose-invert">
      {/* Custom prose styles for professional typography */}
      <style>{`
        article h2 {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          font-size: 1.875rem;
        }
        
        article h3 {
          color: #3B82F6;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        article h4 {
          color: #F1F5F9;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }
        
        article p {
          color: #CBD5E1;
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }
        
        article strong {
          color: #F1F5F9;
          font-weight: 600;
        }
        
        article code {
          background: #1E293B;
          color: #06B6D4;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          border: 1px solid #334155;
        }
        
        article blockquote {
          border-left: 4px solid #3B82F6;
          background: #1E293B/30;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          border-radius: 0.375rem;
          backdrop-filter: blur(10px);
        }
        
        article ul {
          color: #CBD5E1;
        }
        
        article li {
          margin: 0.5rem 0;
        }
        
        article li::marker {
          color: #3B82F6;
        }

        .section-spacing {
          margin-bottom: 4rem;
        }

        .section-spacing:last-child {
          margin-bottom: 0;
        }
      `}</style>
      
      <div className="space-y-16">
        <section className="section-spacing">
          <FrameworkOverview />
        </section>
        
        <section className="section-spacing">
          <ResourcesCommunity />
        </section>
      </div>
    </article>
  );
};
