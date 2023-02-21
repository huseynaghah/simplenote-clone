import React from 'react'
import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { Help } from '../pages/Help'
import { Blog } from '../pages/Blog'
import { Route , Routes } from 'react-router'
import PageLayout from '../layouts'

export const PageRoutes = () => {
  return (
    <>
			<Routes>
				<Route path="/" element={<PageLayout />}>
					<Route index element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/help" element={<Help />} />
                    <Route path="/blog" element={<Blog />} />
				</Route>
			</Routes>
		</>
  )
}
