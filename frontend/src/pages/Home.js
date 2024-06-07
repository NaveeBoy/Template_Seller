import React, { useState, useEffect } from 'react';
import TemplateCard from '../components/TemplateCard';
import Loading from '../components/Loading';

function Home() {
  const [recentTemplates, setRecentTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call with a delay
    setTimeout(() => {
      // Fetch recently uploaded templates from your backend API
      const fetchedTemplates = [
        {
          id: 1,
          title: 'Template 1',
          description: 'This is template 1',
          thumbnail: '/HomePage.PNG',
          demoUrl: '/templates/1',
        },
        {
          id: 2,
          title: 'Template 2',
          description: 'This is template 2',
          thumbnail: '/HomePage.PNG',
          demoUrl: '/templates/2',
        },
        {
            id: 3,
            title: 'Template 2',
            description: 'This is template 2',
            thumbnail: '/HomePage.PNG',
            demoUrl: '/templates/2',
          },
          {
            id: 3,
            title: 'Template 2',
            description: 'This is template 2',
            thumbnail: '/HomePage.PNG',
            demoUrl: '/templates/2',
          },
          {
            id: 3,
            title: 'Template 2',
            description: 'This is template 2',
            thumbnail: '/HomePage.PNG',
            demoUrl: '/templates/2',
          },
          {
            id: 3,
            title: 'Template 2',
            description: 'This is template 2',
            thumbnail: '/HomePage.PNG',
            demoUrl: '/templates/2',
          },
        // Add more template objects as needed
      ];
      setRecentTemplates(fetchedTemplates);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container mx-auto py-8">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Recently Uploaded Templates</h1>
          {recentTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No recent templates found.</p>
          )}
          <div className="mt-8 text-center">
            <a href="/templates" className="btn btn-primary">
              See More Templates
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;