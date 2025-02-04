import React, { useState } from "react";

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
          <div key={key} className="p-4 border rounded">
            <label className="block mb-2 text-right font-bold">
              {translateLabel(key)}
            </label>
            <input
              type="text"
              name={key}
              value={data[key]}
              onChange={handleChange}
              className="w-full text-right border p-2 rounded"
            />
          </div>
        ))}
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded">
        تحديث البيانات
      </button>
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
