/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";
import Select from "react-select";
import { Author, Editorial, SelectOption } from "@/types";
import clsx from "clsx";
import { archivo } from "@/utils/fonts";
import DatePicker from "react-datepicker";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

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
  const fetchAuthors = fetch("/api/authors");
  const fetchEditorials = fetch("/api/editorials");

  const [authors, setAuthors] = useState<SelectOption[]>([]);
  const [editorials, setEditorials] = useState<SelectOption[]>([]);

  const router = useRouter();
  const params = useParams();
  console.log(params);

  const [formData, setFormData] = useState<FilterFormData>({
    author: undefined,
    editorial: undefined,
    date: {
      from: undefined,
      to: undefined,
    },
  });

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

  console.log(router);

  const handleFilterSubmit = (e: any) => {
    e.preventDefault();
    const { author, editorial, date } = formData;
    router.push(
      `/${params.lang}/all?page=1${author ? `&author=${author.label}` : ``}${editorial ? `&editorial=${editorial.label}` : ``}${date.from ? `&dateFrom=${new Date(date.from).toISOString()}` : ``}${date.to ? `&dateTo=${new Date(date.to).toISOString()}` : ``}`
    );
    setIsOpen(false);
  };

  const DATE_RANGE_STYLES = clsx(
    "border border-primary-500 w-full h-10 rounded px-2 placeholder:text-gray-500",
    archivo.className
  );

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
                placeholderText="Enter start date..."
                className={DATE_RANGE_STYLES}
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
                placeholderText="Enter end date..."
                className={DATE_RANGE_STYLES}
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
