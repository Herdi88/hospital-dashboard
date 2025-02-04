1. `App.js`
```javascript
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HospitalDashboard() {
  const [data, setData] = useState({
    surgeries: "",
    doctors: "",
    admittedPatients: "",
    calls: "",
    emergencyPatients: "",
    nextAppointments: "",
    todayAppointments: "",
    topDoctors: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">لوحة تحكم المستشفى</h1>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(data).map((key) => (
          <Card key={key} className="p-4">
            <CardContent>
              <label className="block mb-2 text-right font-bold">
                {translateLabel(key)}
              </label>
              <Input
                type="text"
                name={key}
                value={data[key]}
                onChange={handleChange}
                className="text-right"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="w-full">تحديث البيانات</Button>
    </div>
  );
}

const translateLabel = (key) => {
  const labels = {
    surgeries: "عدد العمليات الجراحية",
    doctors: "أسماء الأطباء",
    admittedPatients: "المرضى الحاليين في المستشفى",
    calls: "عدد المكالمات",
    emergencyPatients: "عدد المرضى في قسم الطوارئ",
    nextAppointments: "مواعيد اليوم التالي",
    todayAppointments: "مواعيد اليوم الحالي",
    topDoctors: "أكثر 10 أطباء لديهم مرضى",
  };
  return labels[key] || key;
};
```