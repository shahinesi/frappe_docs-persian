---
title: "Creating your first Dashboard"
space: "Insights"
url: "https://docs.frappe.io/insights/dashboards/creating-your-first-dashboard"
updated: "2026-01-06"
---


<video controls width="100%" height="auto"><source src="/files/dashboard-new.mp4" type="video/mp4"></video>  

1. Navigate to Dashboards
  
    - Click on "Dashboards" in workbook page
    - Click "+" Icon 

  2. Give it a Name
   
    - Click on the title to rename it
    - Use a clear and descriptive name like "Sales Overview" or "Monthly Performance"
    
  3. Add Content
   
    - Click "Add Chart" to add visualizations
    - Click "Add Filter" to add interactive controls
    - Click "Add Text" to add descriptions or headers
    
  4. Arrange Your Layout
  
    - Drag items to reposition them
    - Resize items by dragging the corners
    - Items snap to a grid for clean alignment
    
  5. Save and Share
  
    - Changes save automatically
    - Click "Done" when finished editing
    - Use the "Share" button to give others access

###  Dashboard Components

#### Charts

  Charts are the heart of your dashboard - they display your data visually.

  Adding Charts
  
  - Click "Add Chart" button
  - Select one or more charts from your workbook
  - Charts appear on the dashboard in a grid

##### Working with Charts
  
  - Move: Click and drag to reposition
  - Resize: Drag the bottom-right corner to change size
  - View Details: Click the expand icon to see the full chart
  - Remove: Click the trash icon to delete from dashboard
  - Edit: Click the pencil icon to modify the chart

##### Pro Tips
  
  - Group related charts together
  - Put the most important metrics at the top
  - Use consistent sizing for visual harmony
  - Consider the reading flow (left to right, top to bottom)

#### Filters

  Filters let viewers interact with your dashboard by controlling what data is displayed across multiple charts.

#### How Filters Work
  
  - One filter can control multiple charts
  - Viewers select values to filter all linked charts simultaneously
  - Great for date ranges, regions, products, or any category

#### Adding a Filter
  
  1. Click "Add Filter" button
  2. Give it a clear label (e.g., "Select Region", "Date Range")
  3. Choose the filter type:
  
    - Text: For categories, names, statuses
    - Number: For quantities, amounts, IDs
    - Date: For time-based filtering
  4. Link it to charts:
  
    - Toggle on the charts you want to control
    - Select which column in each chart should be filtered
  5. Click "Apply"

#### Setting Up Filter Links
  
  - You can link one filter to different columns in different charts
  - Example: A "Region" filter might control:
    - "Region" column in Sales chart
    - "Store Region" column in Inventory chart
    - "Customer Region" column in Orders chart

#### Filter Types Explained:

##### Text Filters
  
  - Use for: Categories, names, regions, statuses
  - Operators: equals, contains, starts with, in list
  - Example: Filter by Product Category = "Electronics"

##### Number Filters
  
  - Use for: Amounts, quantities, IDs, scores
  - Operators: equals, greater than, less than, between
  - Example: Filter by Order Amount > 1000

##### Date Filters
  
  - Use for: Time periods, deadlines, dates
  - Options: Specific date, date range, or relative (last 7 days, this month)
  - Example: Filter by Order Date = Last 30 Days

##### Pro Tips
  
  - Place filters at the top of the dashboard for easy access
  - Use clear labels that explain what the filter does
  - Limit to 3-5 filters to avoid overwhelming users
  - Group related filters together
  - Use relative date filters for dynamic dashboards

#### Text Blocks

  Text blocks add context, headers, and explanations to your dashboard.

  Adding Text
  
  1. Click "Add Text" button
  2. Type or paste your content
  3. Use the editor to format text
  4. Click outside or press Done to save

#### What to Include
  
  - Headers: Section titles to organize the dashboard
  - Descriptions: Explain what charts show
  - Instructions: Guide viewers on how to use filters
  - Notes: Important context or caveats about the data
  - Dates: Show when data was last updated

#### Formatting Options
  
  - Bold, italic, underline
  - Bullet points and numbered lists
  - Headers (different sizes)
  - Links to other resources

##### Pro Tips
  
  - Keep text concise and scannable
  - Use text to divide dashboard into sections
  - Add a summary text at the top explaining the dashboard's purpose
  - Include "Last Updated" information for time-sensitive data