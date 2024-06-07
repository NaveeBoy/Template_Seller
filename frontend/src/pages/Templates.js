import React from 'react';
import TemplateCard from '../components/TemplateCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';

function Templates() {
  // Fetch all templates from your backend API
  const allTemplates = [/* Array of all templates */];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">All Templates</h1>
      <div className="mb-4">
        <CategoryFilter />
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}

export default Templates;