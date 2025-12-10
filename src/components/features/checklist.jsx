import React, {useEffect, useState} from "react";
import { Check } from "lucide-react";
import PropTypes from "prop-types";
import '@fontsource-variable/inter';
import {motion, AnimatePresence} from 'motion/react';
import { internal_createExtendSxProp } from "@mui/material/zero-styled";
import { CrueltyFree } from "@mui/icons-material";


const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, label: "1099s", status: 'pending' },
    { id: 2, label: "Delaware franchise tax", status: 'pending'},
    { id: 3, label: "Federal & state income tax", status: 'pending'},
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        return prev.map((item, i) => 
          i === currentIndex
          ? {
            ...item,
            status: 'completed'
          } 
          : item )});
    setCurrentIndex(prevIndex => {
      const next = (prevIndex + 1) % items.length;

      if (next === 0 && items[items.length - 1].status === "completed"){
        setItems(prev => prev.map(item => ({ ...item, status: "pending" })));
        return 0;
      }

      return next;
    });
  }, 2 * 1000);

  return () => clearInterval(interval);
}, [currentIndex, items]);


  return (
    <div className="w-full max-w-sm rounded-2xl bg-white shadow-sm  border border-gray-200">
      {items.map(item => (
        <ChecklistItem key={item.id} label={item.label} status={item.status} />
      ))}
    </div>
  );
};

const ChecklistItem = ({ label, status }) => {
      const isCompleted = status === 'completed';
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b last:border-none border-neutral-300">
      <div className="flex items-center gap-3"> {/* left */}
        {isCompleted ?
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <Check size={13} strokeWidth={3} />
              </div>
              :
        <span className="w-4 h-4 border-2 border-slate-700 rounded-full border-t-transparent animate-spin"></span>
        }
        

        <span  style={{ fontFamily: '"Inter Variable", sans-serif' }} className="text-gray-800 text-[15px]">{label}</span>
      </div>
<AnimatePresence mode="wait">
  {isCompleted ? (
    <motion.span
      key="completed"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-medium"
    >
      Completed
    </motion.span>
  ) : (
    <motion.div
      key="verifying"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="text-sm bg-white text-gray-500 px-3 py-1 rounded-lg font-medium border border-neutral-300"
    >
      Verifying
    </motion.div>
  )}
</AnimatePresence>

      
    </div>
  );
};



export default Checklist;
