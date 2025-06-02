
import { BookOpen, ExternalLink, Users, Lightbulb } from "lucide-react";
import { KEY_FIGURES, LEARNING_RESOURCES } from "../constants";

export const ResourcesCommunity = () => {
  return (
    <section id="resources-community">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-blue-400" />
        Resources & Community
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <LearningResources />
        <KeyFigures />
        <Communities />
      </div>
    </section>
  );
};

const LearningResources = () => (
  <div>
    <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
      <Lightbulb className="h-5 w-5 text-blue-400" />
      Learning Resources
    </h3>
    <div className="space-y-4">
      {LEARNING_RESOURCES.map((resource, idx) => (
        <div key={idx} className="group">
          <a 
            href={resource.link} 
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2 group"
          >
            {resource.text}
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <p className="text-sm text-slate-400 mt-1">{resource.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const KeyFigures = () => (
  <div>
    <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
      <Users className="h-5 w-5 text-blue-400" />
      Key Figures to Follow
    </h3>
    <div className="space-y-3">
      {KEY_FIGURES.map((person, idx) => (
        <div key={idx}>
          <span className="font-medium text-slate-200 block">{person.handle}</span>
          <span className="text-sm text-slate-400">{person.desc}</span>
        </div>
      ))}
    </div>
  </div>
);

const Communities = () => (
  <div>
    <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
      <Users className="h-5 w-5 text-blue-400" />
      Communities
    </h3>
    <div className="space-y-3">
      {[
        "Cursor Forum - Sort by 'Top' for key discussions",
        "Cursor Reddit - Community updates and feedback",
        "AI Development Discord servers",
        "Tool-specific Slack workspaces"
      ].map((community, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
          <span className="text-slate-300">{community}</span>
        </div>
      ))}
    </div>
  </div>
); 
