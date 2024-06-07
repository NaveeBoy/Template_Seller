import React, { useState } from 'react';
import TemplateCard from '../components/TemplateCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';

function Templates() {
  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 6;

  // Fetch all templates from your backend API
  const allTemplates = [
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
            }
    // ... (template data remains the same)
  ];

  // Get current templates based on pagination
  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = allTemplates.slice(indexOfFirstTemplate, indexOfLastTemplate);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">All Templates</h1>
      <div className="mb-4">
        <CategoryFilter />
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination
          templatesPerPage={templatesPerPage}
          totalTemplates={allTemplates.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

function Pagination({ templatesPerPage, totalTemplates, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTemplates / templatesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md ${
                currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Templates;