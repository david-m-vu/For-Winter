# Fun image sharing app
URL: dasima.netlify.app/  
WIP
## Notes:
There are two methods of generating images:
1. Searching: Uses Google Custom Search API to return images based on search term
2. Random Choice: Right now, the choice feature only lets you choose between the same two hardcoded images. Soon we will implement a lot more images to choose from that are randomly generated. 

## Bugs currently fixing: 
1. Sometimes "Any Image" searching returns empty images due to some React issue
2. Resizing the window on the title page can make the rotating diamond overlap the title
3. Currently unable to delete multiple of the same images that come from the random choice method since their IDs are hardcoded and not unique;