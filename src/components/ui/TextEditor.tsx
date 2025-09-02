import { EditorContent, useEditor, Editor } from "@tiptap/react";
import Color from "@tiptap/extension-color";
import boldIcon from "@/assets/icons/bold.svg";
import itallicIcon from "@/assets/icons/italic.svg";
import redoIcon from "@/assets/icons/redo.svg";
import undoIcon from "@/assets/icons/undo.svg";
import underlineIcon from "@/assets/icons/underline.svg";
import downIcon from "@/assets/icons/triangle_down_dashboard.svg";

import unOrderedIcon from "@/assets/icons/ul.svg";
import orderIcon from "@/assets/icons/ol.svg";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { useField } from "formik";

// Define `content` type explicitly if it is a string (can be HTML or markdown)

// Typing the MenuBar component to accept the editor prop correctly
interface MenuBarProps {
  editor: Editor | null;
}

interface TextEditorProps {
  name: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  const [normalText, setNormalText] = useState<boolean>(false);
  const toggleUnderline = () => {
    if (!editor) return;
    editor.chain().focus().toggleUnderline().run();
  };
  if (!editor) return null;

  return (
    <div className="control-group bg-background px-5 py-2 border-b border-[#B7B7B7]">
      <div className="button-group flex items-center gap-5">
        {/* undo icon */}
        <button
          className={editor.isActive("undo") ? "is-active py-2 px-2" : ""}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <img src={undoIcon} alt="" />
        </button>

        {/* Redo Icon */}
        <button
          className={editor.isActive("redo") ? "is-active px-2 py-2" : ""}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <img src={redoIcon} alt="" />
        </button>

        {/* Normal text */}
        <button
          onClick={() => {
            setNormalText(!normalText);
          }}
          className="flex font-button-text items-center gap-2 relative"
        >
          <span className="text-oc-gray-9 typography-paragraph-p2-regular">
            Normal Text
          </span>
          <img
            onClick={() => setNormalText(!normalText)}
            src={downIcon}
            alt=""
          />

          {normalText && (
            <ul className="absolute w-fit font-small top-[150%] left-0 z-10 text-nowrap bg-white shadow-lg rounded-md">
              <li
                className="cursor-pointer w-full hover:bg-gray-200 px-2 py-1"
                onClick={() => {
                  editor.chain().focus().setParagraph().run();
                  setNormalText(false);
                }}
              >
                Normal
              </li>
              <li
                className="cursor-pointer hover:bg-gray-200 px-2 py-1"
                onClick={() => {
                  editor.chain().focus().setHeading({ level: 1 }).run();
                  setNormalText(false);
                }}
              >
                Heading 1
              </li>
              <li
                className="cursor-pointer hover:bg-gray-200 px-2 py-1"
                onClick={() => {
                  editor.chain().focus().setHeading({ level: 2 }).run();
                  setNormalText(false);
                }}
              >
                Heading 2
              </li>
              <li
                className="cursor-pointer hover:bg-gray-200 px-2 py-1"
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
          <img src={boldIcon} alt="" />
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active px-2 py-2" : ""}
        >
          <img src={itallicIcon} alt="" />
        </button>

        {/* Underline */}
        <button
          onClick={toggleUnderline}
          className={editor.isActive("underline") ? "is-active px-2 py-2" : ""}
        >
          <img src={underlineIcon} alt="" />
        </button>

        {/* Unordered List */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active px-2 py-2" : ""}
        >
          <img src={unOrderedIcon} alt="" />
        </button>

        {/* Ordered List */}
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList") ? "is-active px-2 py-2" : ""
          }
        >
          <img src={orderIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

const TextEditor: React.FC<TextEditorProps> = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const editor = useEditor({
    extensions: [StarterKit, Color, TextStyle, Underline],
    content: field.value,
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
    onUpdate: ({ editor }: { editor: Editor }) => {
      helpers.setValue(editor.getHTML()); // Update the content on change
    },
  });

  return (
    <>
      <div className="rounded-lg border border-[#B7B7B7] overflow-hidden">
        <MenuBar editor={editor} />
        <EditorContent className="overflow-auto" editor={editor} />
      </div>

      {meta.touched && meta.error && (
        <p className="typography-p2-regular text-red-500">{meta.error}</p>
      )}
    </>
  );
};
export default TextEditor;
