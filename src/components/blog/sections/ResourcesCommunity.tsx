import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ChevronRight } from "lucide-react";
import { KEY_FIGURES, LEARNING_RESOURCES } from "../constants";

export const ResourcesCommunity = () => {
  return (
    <section id="resources-community" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-blue-400" />
        Resources & Community
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <LearningResources />
        <KeyFigures />
        <Communities />
      </div>
    </section>
  );
};

const LearningResources = () => (
  <Card className="mb-6 bg-slate-800/80 backdrop-blur-md border-slate-600/50 shadow-2xl">
    <CardHeader>
      <CardTitle className="text-lg text-slate-200">📚 Learning Resources</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {LEARNING_RESOURCES.map((resource, idx) => (
          <li key={idx}>
            <a href={resource.link} className="text-blue-400 hover:text-blue-300 underline transition-colors font-medium">
              {resource.text}
            </a>
            <p className="text-xs text-slate-400 mt-0.5">{resource.desc}</p>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const KeyFigures = () => (
  <Card className="mb-6 bg-slate-800/80 backdrop-blur-md border-slate-600/50 shadow-2xl">
    <CardHeader>
      <CardTitle className="text-lg text-slate-200">👥 Key Figures to Follow</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {KEY_FIGURES.map((person, idx) => (
          <li key={idx} className="flex flex-col">
            <span className="font-medium text-slate-200">{person.handle}</span>
            <span className="text-xs text-slate-400">{person.desc}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Communities = () => (
  <Card className="mb-6 bg-slate-800/80 backdrop-blur-md border-slate-600/50 shadow-2xl"> 
    <CardHeader>
      <CardTitle className="text-lg text-slate-200">🌐 Communities</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {[
          "Cursor Forum - Sort by 'Top' for key discussions",
          "Cursor Reddit - Community updates and feedback",
          "AI Development Discord servers",
          "Tool-specific Slack workspaces"
        ].map((community, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500 flex-shrink-0" />
            <span className="text-sm text-slate-300">{community}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
); 