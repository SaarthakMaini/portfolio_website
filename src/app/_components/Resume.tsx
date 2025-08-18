import React from 'react'
import { Button } from '@/components/ui/button'

function Resume() {
  return (
    <div>
      <a href="/resume.pdf" download>
        <Button>Download Resume</Button>
      </a>
    </div>
  )
}

export default Resume