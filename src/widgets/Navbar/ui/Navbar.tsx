import React from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import cls from './Navbar.module.scss'
interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
        <div className={cls.links}>
            <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
        </div>
    </div>
  )
}
