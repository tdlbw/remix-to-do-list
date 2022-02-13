import type { ReactElement } from 'react'

import { useTranslation } from 'react-i18next'
import { Form } from 'remix'

import InboxIcon from '@mui/icons-material/Inbox'
import LogoutIcon from '@mui/icons-material/Logout'
import TodayIcon from '@mui/icons-material/Today'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

interface ListItemI {
  link: string
  icon: ReactElement
  text: string
}

export default function DrawerItems() {
  const { t } = useTranslation('layout')
  const listOfItems: ListItemI[] = [
    {
      link: '/',
      icon: <InboxIcon />,
      text: t('inbox'),
    },
    {
      link: '/today',
      icon: <TodayIcon />,
      text: t('today'),
    },
  ]

  return (
    <Form method="post">
      <List>
        {listOfItems.map((item: ListItemI) => (
          <ListItem button key={item.text} component="a" href={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button component="button" type="submit" name="_action" value="logout">
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={t('logout')} />
        </ListItem>
      </List>
    </Form>
  )
}
