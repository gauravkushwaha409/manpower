import viewIcon from '../../assets/icons/view_table.svg'
import editIcon from '../../assets/icons/edit_table.svg'
import deleteIcon from '../../assets/icons/delete_table.svg'
import { useNavigate } from 'react-router-dom'
import React from 'react'

interface IProps {
   id: string
   setactiveId?: React.Dispatch<React.SetStateAction<string>>;
}


export const ViewIcon = ({
   id,
}: IProps) => {
   const navigate = useNavigate();

   const handleViewClick = (id: string) => {
      navigate(`details/${id}`);
   };

   return (
      <img
         onClick={() => handleViewClick(id)}
         src={viewIcon}
         className="w-8 h-8 cursor-pointer"
         alt=""
      />
   );
};

export const EditIcon = () => {
   return (
      <img
         src={editIcon}
         className='w-8 h-8 cursor-pointer'
         alt=""
      />
   )
}

export const DeleteIcon = () => {
   return (
      <img
         src={deleteIcon}
         className='w-8 h-8 cursor-pointer'
         alt=""
      />
   )
}


