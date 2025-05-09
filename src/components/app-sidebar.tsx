import * as React from "react"
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { NavMainMediun } from "@/components/nav-main-mediun"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import LogoutButton from "./siderbar"
import { Link } from "react-router-dom"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Gestion De Usuario",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Usuarios",
          url: "usuarios",
        },
        {
          title: "Roles",
          url: "roles",
        },
        {
          title: "Permisos",
          url: "permisos",
        },
      ],
    },
    
  ],

  navMainMediun: [
    {
      title: "Inventario",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Productos",
          url: "productos",
        },
        {
          title: "Categorias",
          url: "categorias",
        },
        {
          title: "Permisos",
          url: "permisoss",
        },
      ],
    },
    
  ],
  projects: [
    {
      name: "Inventario",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMainMediun items={data.navMainMediun} />
        <NavProjects projects={data.projects} />
         {/* 🔹 Agregamos el enlace a Usuarios */}
         <div className="mt-4 p-2 border-t">
          <Link to="/dashboard/usuarios" className="block py-2 text-sm hover:bg-gray-200">
            Usuarios
          </Link>
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
        <LogoutButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
