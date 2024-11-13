'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../costants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

function HeaderComponent({ header }: { header: Header }) {
  const pathname = usePathname()

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/" className={classes.logo}>
          <Image src="/logo-dark.svg" alt="ishikawa" width={170} height={50} />
        </Link>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
