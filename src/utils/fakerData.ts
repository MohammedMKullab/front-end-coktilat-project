import { faker } from "@faker-js/faker";
import { Person } from "./types";

const generatePerson = (id: string): Person => {
  const gender = faker.helpers.arrayElement(["male"]);
  const firstName = faker.person.firstName(gender as "male" | "female");
  const age = faker.number.int({ min: 25, max: 65 });
  const status = faker.helpers.arrayElement(["online", "offline"]);
  const rating = faker.number.float({ min: 3.5, max: 5, fractionDigits: 1 });
  const sessions = faker.number.int({ min: 100, max: 1000 });
  const helpedCount = faker.number.int({ min: 80, max: sessions });
  const returnRate = faker.number.int({ min: 80, max: 100 });

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const availableDays = faker.helpers.arrayElements(days, { min: 3, max: 7 });
  const hours = faker.helpers.arrayElement([
    "8AM-2PM",
    "6PM-10PM",
    "9AM-5PM",
    "10AM-6PM",
  ]);

  const availabilitySchedule = availableDays.map((day) => ({
    day,
    hours,
  }));

  const tags = faker.helpers.arrayElements(
    [
      "Stress Management",
      "Career Guidance",
      "Family Relations",
      "Childcare",
      "Work-Life Balance",
      "Anxiety",
      "Depression",
      "Relationship Issues",
      "Personal Growth",
      "Trauma Recovery",
    ],
    { min: 2, max: 4 }
  );

  const languages = faker.helpers.arrayElements(
    ["Arabic", "English", "French", "Spanish", "German"],
    { min: 1, max: 3 }
  );

  return {
    id,
    name: firstName,
    age,
    gender,
    availability: `${availableDays[0]}-${
      availableDays[availableDays.length - 1]
    } ${hours}`,
    tags,
    description: faker.lorem.paragraph(),
    profileImage: faker.image.personPortrait({ sex: "male" }),
    status,
    rating,
    sessions,
    helpedCount,
    returnRate,
    languages,
    availabilitySchedule,
  };
};

export const fakerPeople: Person[] = Array.from({ length: 21 }, (_, index) =>
  generatePerson((index + 1).toString())
);
