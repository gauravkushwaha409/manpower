import { EditorContent, useEditor, Editor } from "@tiptap/react";
import Color from "@tiptap/extension-color";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect, useState } from "react";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { useField } from "formik";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Redo,
  UnderlineIcon,
  Undo,
} from "lucide-react";

// Define `content` type explicitly if it is a string (can be HTML or markdown)

// Typing the MenuBar component to accept the editor prop correctly
interface MenuBarProps {
  editor: Editor | null;
}

interface TextEditorProps {
  name: string;
  label: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  const [normalText, setNormalText] = useState<boolean>(false);
  const toggleUnderline = () => {
    if (!editor) return;
    editor.chain().focus().toggleUnderline().run();
  };
  if (!editor) return null;

  return (
    <div className="control-group bg-[#E3E8EF] px-5 py-2 rounded-t-[8px]">
      <div className="button-group h-10 flex items-center gap-5">
        {/* undo icon */}
        <button
          className={editor.isActive("undo") ? "is-active py-2 px-2" : ""}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo size={14} />
        </button>

        {/* Redo Icon */}
        <button
          className={editor.isActive("redo") ? "is-active px-2 py-2" : ""}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo size={14} />
        </button>

        {/* Normal text */}
        <button
          onClick={() => {
            setNormalText(!normalText);
          }}
          className="relative flex items-center gap-2 font-button-text"
        >
          <span className="text-oc-gray-9 typography-label-text text-gray-800">
            Normal Text
          </span>

          {normalText && (
            <ul className="top-[150%] left-0 z-10 absolute bg-white shadow-lg rounded-md w-fit font-small text-nowrap">
              <li
                className="hover:bg-gray-200 px-2 py-1 w-full cursor-pointer"
                onClick={() => {
                  editor.chain().focus().setParagraph().run();
                  setNormalText(false);
                }}
              >
                Normal
              </li>
              <li
                className="hover:bg-gray-200 px-2 py-1 cursor-pointer"
                onClick={() => {
                  editor.chain().focus().setHeading({ level: 1 }).run();
                  setNormalText(false);
                }}
              >
                Heading 1
              </li>
              <li
                className="hover:bg-gray-200 px-2 py-1 cursor-pointer"
                onClick={() => {
                  editor.chain().focus().setHeading({ level: 2 }).run();
                  setNormalText(false);
                }}
              >
                Heading 2
              </li>
              <li
                className="hover:bg-gray-200 px-2 py-1 cursor-pointer"
                onClick={() => {
                  editor.chain().focus().setHeading({ level: 3 }).run();
                  setNormalText(false);
                }}
              >
                Heading 3
              </li>
            </ul>
          )}
        </button>
        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active px-2 py-2" : ""}
        >
          <Bold size={14} />
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active px-2 py-2" : ""}
        >
          <Italic size={14} />
        </button>

        {/* Underline */}
        <button
          onClick={toggleUnderline}
          className={editor.isActive("underline") ? "is-active px-2 py-2" : ""}
        >
          <UnderlineIcon size={14} />
        </button>

        {/* Unordered List */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active px-2 py-2" : ""}
        >
          <List size={14} />
        </button>

        {/* Ordered List */}
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList") ? "is-active px-2 py-2" : ""
          }
        >
          <ListOrdered size={14} />
        </button>
      </div>
    </div>
  );
};

const TextEditor: React.FC<TextEditorProps> = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);
  const editor = useEditor({
    extensions: [StarterKit, Color, TextStyle, Underline],
    content: field?.value,
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
    onUpdate: ({ editor }: { editor: Editor }) => {
      helpers.setValue(editor.getHTML()); // Update the content on change
    },
  });
  useEffect(() => {
    if (editor && field.value !== editor.getHTML()) {
      editor.commands.setContent(field.value || "", { emitUpdate: false }); // false = don't emit update event
    }
  }, [field.value, editor]);
  return (
    <>
      <div className="flex flex-col gap-2.5 rounded-lg">
        <label htmlFor={name} className="typography-input-label">
          {label}
        </label>
        <div>
          <MenuBar editor={editor} />
          <EditorContent className="border border-[#E3E8EF]" editor={editor} />
        </div>
      </div>

      {meta.touched && meta.error && (
        <p className="text-red-500 typography-p2-regular">{meta.error}</p>
      )}
    </>
  );
};
export default TextEditor;
