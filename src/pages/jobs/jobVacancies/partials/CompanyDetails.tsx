import InputText from '@/components/form/InputText';
import React from 'react';

const CompanyDetails: React.FC = () => {
   return (
      <div>
         <div className='mt-4'>
            <div className='flex flex-col gap-4'>
               <div className='grid grid-cols-2 gap-5'>
                  <InputText label='Enter your Pre Approval Date' name='pre_approval_date' />
                  <InputText label='Enter your Pre LT number' name='lt_number' />
                  <InputText label='Enter your Chalani Number' name='chalani_number' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CompanyDetails;