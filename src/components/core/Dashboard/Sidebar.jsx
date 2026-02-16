import { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authApi"
import ConfirmationModal from "../../common/ConfirmationModal"
import SidebarLink from "./SidebarLink"

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  )
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div>
      </div>
    )
  }

  const SidebarContent = ({ mobile = false }) => (
    <div className={`flex flex-col ${mobile ? 'w-full' : ''} ${mobile ? 'py-4' : 'py-10'}`}>
      <div className="flex flex-col">
        {sidebarLinks.map((link) => {
          if (link.type && user?.accountType !== link.type) return null
          return (
            <SidebarLink 
              key={link.id} 
              link={link} 
              iconName={link.icon}
              onClick={() => mobile && setIsMobileMenuOpen(false)}
            />
          )
        })}
      </div>
      <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
      <div className="flex flex-col">
        <SidebarLink
          link={{ name: "Settings", path: "/dashboard/settings" }}
          iconName="VscSettingsGear"
          onClick={() => mobile && setIsMobileMenuOpen(false)}
        />
        <button
          onClick={() =>
            setConfirmationModal({
              text1: "Are you sure?",
              text2: "You will be logged out of your account.",
              btn1Text: "Logout",
              btn2Text: "Cancel",
              btn1Handler: () => dispatch(logout(navigate)),
              btn2Handler: () => setConfirmationModal(null),
            })
          }
          className="px-8 py-2 text-sm font-medium text-richblack-300"
        >
          <div className="flex items-center gap-x-2">
            <VscSignOut className="text-lg" />
            <span>Logout</span>
          </div>
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-richblack-800 border border-richblack-700 rounded-lg text-richblack-5 hover:bg-richblack-700 transition-colors"
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose className="text-xl" />
        ) : (
          <AiOutlineMenu className="text-xl" />
        )}
      </button>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-richblack-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-richblack-800 border-r border-richblack-700 shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent mobile={true} />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <SidebarContent />
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
