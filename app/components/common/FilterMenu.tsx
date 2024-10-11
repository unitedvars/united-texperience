import { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";
import Select from "react-select";
import { Author, Editorial, SelectOption } from "@/types";
import clsx from "clsx";
import { archivo } from "@/utils/fonts";
import DatePicker from "react-datepicker";
import Button from "./Button";

interface FilterFormData {
  author?: any;
  editorial?: any;
  date: {
    from?: any;
    to?: any;
  };
}

const FilterMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [authors, setAuthors] = useState<SelectOption[]>([]);
  const [editorials, setEditorials] = useState<SelectOption[]>([]);

  const [formData, setFormData] = useState<FilterFormData>({
    author: undefined,
    editorial: undefined,
    date: {
      from: new Date(),
      to: new Date(),
    },
  });

  const fetchAuthors = fetch("/api/authors");
  const fetchEditorials = fetch("/api/editorials");

  useEffect(() => {
    fetchAuthors.then((res) => {
      res.json().then((authorsData) => {
        setAuthors(
          authorsData.map((author: Author) => ({
            label: author.name,
            value: {
              id: author.name,
            },
          }))
        );
      });
    });

    fetchEditorials.then((res) => {
      res.json().then((editorialsData) => {
        setEditorials(
          editorialsData.map((editorial: Editorial) => ({
            label: editorial.name,
            value: {
              id: editorial.name,
            },
          }))
        );
      });
    });
  }, []);

  const handleFilterSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    console.log(editorials);
  }, [editorials]);

  return (
    <MenuContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleFilterSubmit} className="flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <div className={clsx("flex flex-col gap-2", archivo.className)}>
            <label htmlFor="author">Author</label>
            <Select
              id="author"
              options={authors}
              isClearable
              onChange={(val) => setFormData({ ...formData, author: val })}
              classNamePrefix={"select"}
            />
          </div>
          <div className={clsx("flex flex-col gap-2", archivo.className)}>
            <label htmlFor="editorial">Editorial</label>
            <Select
              id="editorial"
              options={editorials}
              isClearable
              value={formData.editorial}
              onChange={(val) => setFormData({ ...formData, editorial: val })}
              classNamePrefix={"select"}
              className="border-primary-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 grow">
              <label htmlFor="editorial" className={clsx(archivo.className)}>
                Date From
              </label>
              <DatePicker
                selected={formData.date.from}
                onChange={(date) =>
                  setFormData({
                    ...formData,
                    date: {
                      ...formData.date,
                      from: date,
                    },
                  })
                }
                selectsStart
                startDate={formData.date.from}
                endDate={formData.date.to}
                className={clsx(
                  "border border-primary-500 w-full h-10 rounded px-2",
                  archivo.className
                )}
              />
            </div>
            <div className="flex flex-col gap-2 grow">
              <label htmlFor="editorial" className={clsx(archivo.className)}>
                Date To
              </label>
              <DatePicker
                selected={formData.date.to}
                onChange={(date) =>
                  setFormData({
                    ...formData,
                    date: {
                      ...formData.date,
                      to: date,
                    },
                  })
                }
                selectsEnd
                startDate={formData.date.from}
                endDate={formData.date.to}
                minDate={formData.date.from}
                className={clsx(
                  "border border-primary-500 w-full h-10 rounded px-2",
                  archivo.className
                )}
              />
            </div>
          </div>
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </form>
    </MenuContainer>
  );
};

export default FilterMenu;
