# Blog Post Creation FAQ

## Writing Posts in Plain Text

**Q: How can I write blog posts in a simple text editor?**

**Current Setup:**
- Write posts directly in HTML (like `welcome-what-are-we-doing-here.html`)
- Update `blog-posts.json` manually with metadata

**Better Workflow Options:**

### Option 1: Markdown + Simple Converter
1. Write posts in `.md` files using any text editor
2. Use a simple Node.js script with `marked` library to convert to HTML
3. Automatically update the JSON index

### Option 2: Markdown with Frontmatter
```markdown
---
title: "My Post Title"
category: "tech-ai"
tags: ["databricks", "neon", "fitness"]
date: "2025-01-07"
---

# Your post content here

Regular markdown with **bold**, *italic*, and [links](url).
```

## Adding Images and Videos

**Media Structure:**
```
blog/
  media/
    images/
      post-name/
        screenshot1.jpg
        diagram.png
    videos/
      post-name/
        demo.mp4
```

**In Markdown:**
```markdown
![Alt text](../media/images/post-name/screenshot1.jpg)

<video controls>
  <source src="../media/videos/post-name/demo.mp4" type="video/mp4">
</video>
```

## Next Steps

1. **Install markdown processor**: `npm install marked` for HTML conversion
2. **Create build script**: Convert `.md` files to HTML automatically  
3. **Add media folder structure**: Organize images/videos by post
4. **Update CSS**: Add responsive image/video styles
5. **Optional**: Add image optimization (WebP conversion, resizing)

## Quick Start Workflow

1. Create `blog/drafts/my-post.md`
2. Write in markdown with frontmatter
3. Add images to `blog/media/images/my-post/`
4. Run conversion script
5. Post appears on blog automatically

This keeps writing simple while supporting rich media content.