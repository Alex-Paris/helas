'use client'

import { SxProps, Theme } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import { Sliders, X } from '@phosphor-icons/react'
import { useState } from 'react'

import { Button } from './Button'
import { Filter } from './Filter'

const style: SxProps<Theme> = {
  position: 'fixed' as const,
  inset: '0',
  bgcolor: '#F5F5F5',
  boxShadow: 24,
  overflow: 'auto',
  p: 3,
  paddingBottom: '250px',
}

interface FilterProps {
  meals: string[]
  stars: string[]
}

export function PopupFilter({ meals, stars }: FilterProps) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button
        className="flex px-4 py-[0.8125rem] lg:hidden"
        styleType="outlined-green"
        onClick={handleOpen}
      >
        <Sliders size={16} /> Φίλτρα
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Filter meals={meals} stars={stars} />

            {/* Close Button */}
            <div
              className="fixed right-4 top-4 rounded-full bg-translucent-bg p-4 shadow-bg-blur-shadow backdrop-blur-[32px]"
              onClick={handleClose}
            >
              <X />
            </div>

            {/* Submit button */}
            <div className="fixed bottom-4 left-4 right-4 rounded-xl border-[1px] border-stroke bg-translucent-bg p-4 backdrop-blur-lg">
              <Button className="w-full justify-center" onClick={handleClose}>
                Εφαρμογή
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
