import React from 'react'
import { Button } from '@/components/ui/button'

function Resume() {
  return (
    <div className="w-full sm:w-auto">
      <a href="/resume.pdf" download>
        <Button className="w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6">
          Download Resume
        </Button>
      </a>
    </div>
  )
}

export default Resume