insert into "users"
  ("username", "hashedPassword")
  values ('Guest', '$argon2id$v=19$m=65536,t=3,p=4$Xp6zDeqHcJ5RjQUTskG+HA$MmSleZkcv/gLlOWT1g5W32YTjKlBQW2HHB6Oi3HJ8Cc');

insert into "pets"
  ("name", "type", "age", "userId")
  values ('Bella', 'dog', 11, 1);


insert into "immunizations"
  ("name", "date", "petId")
  values ('Rabies', '2020-02-07', 1),
  ('Parvovirus', '2020-02-14', 1);

insert into "medications"
  ("name", "dose", "directions", "petId")
  values ('Tramadol', '5 mg/kg', '1 capsule two to three times daily or every eight hours', 1),
  ('Prednisone', '0.5 mg/kg', 'Once daily at same time of day', 1);
