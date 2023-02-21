import React from 'react';

class Link extends React.Component {
  render() {
    const prototypes = [
      { title: 'Prototype 1', href: '#', description: 'Lorem ipsum dolor sit amet.' },
      { title: 'Prototype 2', href: '#', description: 'Lorem ipsum dolor sit amet.' },
      { title: 'Prototype 3', href: '#', description: 'Lorem ipsum dolor sit amet.' },
      { title: 'Prototype 4', href: '#', description: 'Lorem ipsum dolor sit amet.' },
      { title: 'Prototype 5', href: '#', description: 'Lorem ipsum dolor sit amet.' },
    ];

    return (
      <div className="flex flex-row space-x-4">
        {prototypes.map((prototype) => (
          <div className="bg-white rounded-md p-4 shadow-md" key={prototype.title}>
            <a href={prototype.href} className="text-lg font-medium text-gray-800">{prototype.title}</a>
            <p className="text-gray-600 mt-2">{prototype.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Link;
