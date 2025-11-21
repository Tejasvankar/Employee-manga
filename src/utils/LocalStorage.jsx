const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Check Inventory",
        "description": "Review stock levels and update system records.",
        "date": "2025-01-10",
        "category": "Inventory"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Prepare Report",
        "description": "Create a weekly sales report.",
        "date": "2025-01-08",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Customer Follow-up",
        "description": "Call pending customers for feedback.",
        "date": "2025-01-05",
        "category": "Customer Service"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "System Maintenance",
        "description": "Perform routine system checks.",
        "date": "2025-01-11",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Bug Fix",
        "description": "Resolve UI alignment issue.",
        "date": "2025-01-07",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Update Documentation",
        "description": "Improve API documentation.",
        "date": "2025-01-06",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design Banner",
        "description": "Create promotional banner for new product.",
        "date": "2025-01-12",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Logo Revision",
        "description": "Update old logo style guidelines.",
        "date": "2025-01-09",
        "category": "Branding"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "UI Mockup",
        "description": "Prepare UI mockups for dashboard.",
        "date": "2025-01-04",
        "category": "UI/UX"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Team Meeting",
        "description": "Lead the weekly project sync.",
        "date": "2025-01-10",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client Call",
        "description": "Discuss requirements with new client.",
        "date": "2025-01-08",
        "category": "Client Handling"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Project Plan",
        "description": "Create updated project timeline.",
        "date": "2025-01-03",
        "category": "Planning"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Social Media Post",
        "description": "Create Instagram content for product launch.",
        "date": "2025-01-11",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Ad Campaign",
        "description": "Set up Google Ads campaign.",
        "date": "2025-01-09",
        "category": "Advertising"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Email Newsletter",
        "description": "Write January newsletter.",
        "date": "2025-01-05",
        "category": "Email Marketing"
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];
  
export const setLocalStorage = () => {
   localStorage.setItem('employees',JSON.stringify(employees));
   localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalstorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin);
}