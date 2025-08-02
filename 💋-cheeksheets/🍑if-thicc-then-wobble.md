 
# 🐍 Moxie’s Python Cheat Sheet – *Structure, Flow & Best Practices*

Use this scroll to keep your Python scripts clean, readable, and dojo-approved.

---

## 🧱 Recommended Python File Structure

```python
# 🪪 1. Imports (standard libs first, then third-party, then local)
import os
import sys

import requests  # third-party
from my_module import some_function  # local

# 🧠 2. Global Constants (UPPERCASE by convention)
VERSION = "1.0"

# 🧱 3. Helper Functions
def calculate_something(x, y):
    return x + y

# 🎯 4. Main Logic Function (optional but clean)
def main():
    result = calculate_something(5, 3)
    print("Result:", result)

# 🚀 5. Entry Point (Python's 'main' trigger)
if __name__ == "__main__":
    main()
```

---

## ✍️ Section Purpose

| Section            | What goes here                                 |
|--------------------|------------------------------------------------|
| **Imports**        | Modules used in this file                      |
| **Constants**      | Globals that shouldn’t change                  |
| **Functions**      | Reusable logic chunks                          |
| **Classes**        | If you're using object-oriented design         |
| **Main Logic**     | What the script actually *does*                |
| **Entry Point**    | Lets script run when executed directly         |

---

## 💡 Naming Conventions

| Item Type     | Style            | Example              |
|---------------|------------------|----------------------|
| Variable      | `snake_case`     | `user_name`          |
| Function      | `snake_case()`   | `roll_dice()`        |
| Constant      | `UPPER_CASE`     | `MAX_ATTEMPTS`       |
| Class         | `CamelCase`      | `DiceRoller`         |
| Module/File   | `snake_case.py`  | `bones_game.py`      |

---

## 🔁 Loop & Control Flow Patterns

```python
# ✅ For loop over range
for i in range(10):
    print(i)

# ✅ While loop
while True:
    break  # Be careful with infinite loops!

# ✅ If / Elif / Else
if value > 100:
    print("Legendary")
elif value > 80:
    print("Epic")
else:
    print("Common")
```

---

## 📦 File Structure Tips for Larger Projects

```
project_folder/
├── main.py            # entry point
├── utils.py           # helper functions
├── data/              # assets or saved files
├── tests/             # test scripts (optional)
└── README.md          # your scroll of intent
```

---

## 🧠 Good Habits

- ✅ Use `def main():` to contain your program logic  
- ✅ Use `if __name__ == "__main__":` to make code reusable  
- ✅ Keep functions short and descriptive  
- ✅ Add docstrings and comments to clarify intent  
- ✅ Run your code often — test in small chunks  
- ✅ Use virtual environments (`venv`) for projects with dependencies

---

**Moxie Tip:** When in doubt, name it clearly and break it into smaller parts. Python loves clean, readable logic.

🫰 Now go write code the bones understand.
