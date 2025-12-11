#!/usr/bin/env python3
"""
Component Extraction Helper
This script helps you extract component code from your original index.html file.

Usage:
    python3 extract_component.py <original_file.html> <ComponentName>

Example:
    python3 extract_component.py old_index.html AdminDashboard

The script will:
1. Find the component function in the original file
2. Extract the complete function code
3. Add proper exports
4. Save to the correct location in js/components/
"""

import sys
import re
import os

def find_component_code(file_content, component_name):
    """Find and extract a component's code from the file."""
    
    # Pattern to match the function definition
    pattern = rf'function\s+{component_name}\s*\([^)]*\)\s*{{'
    
    match = re.search(pattern, file_content)
    if not match:
        return None, f"Component '{component_name}' not found in file"
    
    start_pos = match.start()
    
    # Find the end by matching braces
    brace_count = 0
    in_function = False
    end_pos = start_pos
    
    for i, char in enumerate(file_content[start_pos:], start_pos):
        if char == '{':
            brace_count += 1
            in_function = True
        elif char == '}':
            brace_count -= 1
            if in_function and brace_count == 0:
                end_pos = i + 1
                break
    
    if brace_count != 0:
        return None, "Could not find complete function (mismatched braces)"
    
    component_code = file_content[start_pos:end_pos]
    
    # Add export
    export_code = f"\n\nif (typeof window !== 'undefined') {{\n    window.{component_name} = {component_name};\n}}\n"
    
    return component_code + export_code, None

def main():
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    
    original_file = sys.argv[1]
    component_name = sys.argv[2]
    
    # Read original file
    try:
        with open(original_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File '{original_file}' not found")
        sys.exit(1)
    
    # Extract component
    component_code, error = find_component_code(content, component_name)
    
    if error:
        print(f"Error: {error}")
        sys.exit(1)
    
    # Save to correct location
    output_dir = "js/components"
    os.makedirs(output_dir, exist_ok=True)
    output_file = os.path.join(output_dir, f"{component_name}.js")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(component_code)
    
    print(f"✅ Successfully extracted {component_name}")
    print(f"   Saved to: {output_file}")
    print(f"   Size: {len(component_code)} characters")
    print()
    print("Next steps:")
    print(f"1. Review {output_file}")
    print(f"2. Test the component in your application")
    print(f"3. Continue with the next component")

if __name__ == "__main__":
    main()
