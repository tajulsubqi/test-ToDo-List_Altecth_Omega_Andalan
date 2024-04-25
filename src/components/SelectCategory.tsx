import React from "react"
import { View } from "react-native"
import {
  Select,
  SelectBackdrop,
  SelectDragIndicatorWrapper,
  SelectInput,
} from "@gluestack-ui/themed"
import { SelectTrigger } from "@gluestack-ui/themed"
import { SelectIcon } from "@gluestack-ui/themed"
import { Icon } from "@gluestack-ui/themed"
import { SelectPortal } from "@gluestack-ui/themed"
import { SelectContent } from "@gluestack-ui/themed"
import { ChevronDownIcon } from "@gluestack-ui/themed"
import { SelectItem } from "@gluestack-ui/themed"
import { SelectDragIndicator } from "@gluestack-ui/themed"

const SelectCategory = () => {
  const uniqueCategories = Array.from(new Set(options.map((option) => option.category)))

  return (
    <View>
      <Select bgColor="white">
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select a category" fontSize={15} />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>

            {uniqueCategories.map((category) => (
              <SelectItem key={category} label={category} value={category} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  )
}

export default SelectCategory

const options = [
  {
    id: 1,
    title: "Membuat fitur login",
    category: "Frontend",
    description: "Implementasikan fitur login menggunakan React dan Redux.",
    completed: false,
  },
  {
    id: 2,
    title: "Mengoptimalkan API endpoint",
    category: "Backend",
    description: "Perbaiki performa API endpoint dengan memanfaatkan caching.",
    completed: true,
  },
  {
    id: 3,
    title: "Membuat desain database",
    category: "Database",
    description: "Rancang struktur database untuk aplikasi baru.",
    completed: false,
  },
  {
    id: 4,
    title: "Mengikuti kursus online",
    category: "Pendidikan",
    description: "Daftar dan ikuti kursus tentang algoritma dan struktur data.",
    completed: true,
  },
  {
    id: 5,
    title: "Mengoptimalkan performa aplikasi",
    category: "Backend",
    description: "Lakukan profil aplikasi dan identifikasi area untuk dioptimalkan.",
    completed: false,
  },
  {
    id: 6,
    title: "Menulis dokumentasi API",
    category: "Backend",
    description: "Tulis dokumentasi lengkap untuk setiap endpoint API.",
    completed: false,
  },
  {
    id: 7,
    title: "Mempelajari bahasa pemrograman baru",
    category: "Pendidikan",
    description: "Mulailah mempelajari bahasa pemrograman Python.",
    completed: true,
  },
  {
    id: 8,
    title: "Mengikuti webinar teknologi",
    category: "Pendidikan",
    description: "Ikuti webinar tentang teknologi terbaru dalam industri.",
    completed: false,
  },
  {
    id: 9,
    title: "Membuat fitur pembayaran",
    category: "Frontend",
    description: "Implementasikan fitur pembayaran menggunakan Stripe API.",
    completed: false,
  },
  {
    id: 10,
    title: "Mengembangkan aplikasi mobile",
    category: "Mobile Development",
    description: "Mulai pengembangan aplikasi mobile menggunakan React Native.",
    completed: false,
  },
]
