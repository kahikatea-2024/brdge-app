import NavBar from "../../components/Header/NavBar";
import Avatar from "../../components/UI/Avatar/Avatar";
import ProfileCoverImage from "../../components/UI/ProfileCoverImage/ProfileCoverImage";

export default function Profile() {
  
  return (
    <div className="bg-darkGrey">
      <NavBar />
      <div className="relative w-full h-64">
      <ProfileCoverImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3789c8c-0874-407c-a457-03b147f59b18/dfq9q35-97e3227f-9e86-4551-8dd1-e63e36ffd8f2.jpg/v1/fill/w_1280,h_360,q_75,strp/shrek_swamp_background_by_darkmoonanimation_dfq9q35-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzYwIiwicGF0aCI6IlwvZlwvZDM3ODljOGMtMDg3NC00MDdjLWE0NTctMDNiMTQ3ZjU5YjE4XC9kZnE5cTM1LTk3ZTMyMjdmLTllODYtNDU1MS04ZGQxLWU2M2UzNmZmZDhmMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ybm3gLnQhLE_RhooyzeiDr2ah8pcRJNGaFfxwXtLnDM" />
       <div className="">
       <Avatar size="large" verified = {true} src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"/>
       </div>
      </div>
    </div>
  )
}