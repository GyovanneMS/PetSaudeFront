import React from 'react';
import Monkey from '../../../../assets/svg/monkey.svg';
import Dog from '../../../../assets/svg/iconDog.svg';


export const Appointment = () => {

    return ( 
        <>
            <section className='w-full'>
                <div className='p-20'>
                    <h1 className='text-5xl font-semibold'>Selecione o animal</h1>
                    <div className='flex justify-between pt-10'>
                        <div className='flex flex-col w-2/4'>
                                <div className='flex border rounded-lg h-24'>
                                    <img className='w-32' src={Dog}/>
                                    <input className='w-96 text-2xl' placeholder='List item'/>
                                </div>
                                <div className='flex border rounded-md h-24'>
                                    <img className='w-32' src={Dog}/>
                                    <input className='w-96 text-2xl' placeholder='List item'/>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <img className='w-56' src={Monkey}></img>
                                <div className='flex flex-col pl-10'>
                                <label>
                                    <input type="text" name="firstName" value='Nome' className='bg-transparent border-none md:text-5xl font-semibold ' />
                                </label>

                                <label>
                                    <input type="text" name="firstName" value='Espécie' className='bg-transparent border-none text-1xl md:text-6xl text-[#A9A9A9]' />
                                </label>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                      <h2 className='text-5xl font-semibold pt-10 pl-20'>Selecione a data e a hora</h2>
                      <div className='flex xl:flex-row flex-col justify-between lg:gap-8 gap-2 w-full pl-20 pt-10'>
                      <label className='w-full flex flex-col'>
                      <p className='text-3xl text-[#A9A9A9]'>
                            Data
                        </p>
                         
                          <input className='w-56' type="date" />
                      </label>
                      <label className='w-full flex flex-col'>
                        <p className='text-3xl text-[#A9A9A9]'>
                            Hora
                        </p>
                          
                          <input className='w-56' type="time" />
                      </label>
                  </div>
                <div className='pl-20 pr-20'>
                    <div className='flex mt-10 justify-between'>
                        <button className='p-2 w-56 h-20 border rounded-full bg-[#F9DEDC] text-[#410E0B] font-bold text-2xl'>
                            Cancelar
                        </button>
                        <button className='ml-56  p-2 w-56 h-20 border rounded-full bg-[#9ED1B7] text-[#41564B] font-bold text-2xl'>
                            Marcar
                        </button>
                    </div>
                </div>
              
                
            </section>
        
        </>

    )
};

