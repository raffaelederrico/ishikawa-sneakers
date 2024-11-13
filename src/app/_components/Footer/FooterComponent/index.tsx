'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../costants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      {/* <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter> */}

      <div className={classes.footer}>
        <Gutter>
          <div className={`${classes.wrap}`}>
            <div className={classes.innerWrap}>
              <div className={classes.logoAndSocial}>
                <Link href="/">
                  <Image src="/logo-white.png" alt="logo" width={170} height={50} />
                </Link>

                <div className={classes.socialLinks}>
                  {navItems.map(item => {
                    const icon = item?.link?.icon as Media

                    return (
                      <Link key={item.link.label} href={item.link.url}>
                        <Image
                          src={icon?.url}
                          alt={item.link.label}
                          width={24}
                          height={24}
                          className={classes.socialIcon}
                        />
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className={classes.footerContentColumn}>
                <div className={classes.footerContentRow}>
                  <p>{footer.companyInfo.companyName}</p>
                  <p>{footer.companyInfo.companyAddress}</p>
                  <p>{footer.companyInfo.companyPhone}</p>
                  <p>{footer.companyInfo.companyEmail}</p>
                </div>
                <div className={classes.footerContentRow}>
                  <h4 className={classes.h4}>Ishikawa Store</h4>
                  <p>termini e Condizioni</p>
                  <p>Spedizioni, Cambi e Resi</p>
                </div>
                <div className={classes.footerContentRow}>
                  <h4 className={classes.h4}>Aspetti Legali</h4>
                  <p>Privacy Policy</p>
                  <p>Cookie Policy</p>
                </div>
              </div>
            </div>
          </div>

          <hr className={classes.horizontalLine} />
          <div className={classes.footerBottomItems}>
            <p className={classes.p}>{footer?.copyright}</p>
            <p className={classes.p}>{footer?.companyVat}</p>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
