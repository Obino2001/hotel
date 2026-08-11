# 📝 To-Do List Application

A beautiful, fully-functional to-do list app with local storage functionality. All your tasks are saved automatically in your browser!

## Features

✨ **Local Storage** - Tasks persist even after closing the browser
✅ **Add Tasks** - Create new to-do items easily
❌ **Delete Tasks** - Remove individual tasks or clear all at once
✓ **Mark Complete** - Check off completed tasks
🔍 **Filter Views** - View All, Active, or Completed tasks only
📊 **Statistics** - See total, active, and completed task counts
📱 **Responsive Design** - Works on mobile, tablet, and desktop
🎨 **Beautiful UI** - Modern gradient design with smooth animations
⌨️ **Keyboard Support** - Press Enter to add tasks

## How to Use

1. **Open the app** - Open `index.html` in your browser
2. **Add a task** - Type in the input field and click "Add Task" (or press Enter)
3. **Mark complete** - Click the checkbox next to a task
4. **Delete a task** - Click the × button
5. **Filter tasks** - Use All, Active, or Completed buttons
6. **Clear tasks** - Use "Clear Completed" or "Clear All" buttons

## Local Storage

- ✅ All tasks are automatically saved to your browser's local storage
- ✅ Tasks persist even if you close the browser
- ✅ Each task stores: text, completion status, and creation timestamp
- ✅ No backend or internet required - everything runs locally

## Data Structure

Each task is stored as an object:
```javascript
{
    id: 1234567890,           // Unique timestamp ID
    text: "Buy groceries",    // Task description
    completed: false,         // Completion status
    createdAt: "8/11/2026"   // When it was created
}
```

## Keyboard Shortcuts

- **Enter** - Add new task (when focused on input)
- **Click checkbox** - Toggle task completion
- **Click ×** - Delete individual task

## Browser Compatibility

✅ Chrome
✅ Firefox
✅ Safari
✅ Edge
✅ Any modern browser with local storage support

## Customization

To customize:

1. **Change colors** - Edit `styles.css` gradient colors (currently purple)
2. **Modify storage key** - Change `storageKey` in `script.js`
3. **Add categories** - Extend the filter options in HTML and JS
4. **Add due dates** - Modify the task object to include date field

## Tips & Tricks

- 💡 Your tasks are stored in browser's Local Storage
- 💡 Clear browser cache to delete all tasks
- 💡 Use "Clear Completed" to keep your list clean
- 💡 Perfect for daily reminders and project planning

## File Structure

```
todo-app/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # Application logic & local storage
└── README.md       # This file
```

## Troubleshooting

**Tasks not saving?**
- Check if local storage is enabled in your browser
- Try clearing browser cache and reloading

**Tasks disappeared?**
- Local storage might have been cleared
- Check browser privacy settings

**Can't add tasks?**
- Make sure you enter text in the input field
- Try pressing Enter instead of clicking Add

---

Enjoy staying organized! 🎉