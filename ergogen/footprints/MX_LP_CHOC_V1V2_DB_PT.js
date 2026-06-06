module.exports = {
    params: {
        designator: 'U',
    },
    body: p => {
        return `
            (footprint "MX_LP_CHOC_V1V2_DoubleSided_PROTO"
            	(version 20260206)
            	(generator "pcbnew")
            	(generator_version "10.0")
            	(layer "F.Cu")
            	(descr "Compatible with Cherry MX Low Profile, Kailh Choc V1 (PG1350) and Choc V2 (PG1353) low profile mechanical keyboard switch, through-hole soldering, single-sided mounting.")
            	(tags "switch, low_profile")
            	(property "Reference" "REF**"
            		(at 0 -8.5 0)
            		(unlocked yes)
            		(layer "F.SilkS")
            		(hide yes)
            		(uuid "40491359-8c54-4408-a836-c95b372027c9")
            		(effects
            			(font
            				(size 1 1)
            				(thickness 0.15)
            			)
            		)
            	)
            	${p.at}
            	(property "Value" "MX_LP_CHOC_V1V2_DoubleSided_PROTO"
            		(at 0 8.5 ${p.r})
            		(unlocked yes)
            		(layer "F.Fab")
            		(hide yes)
            		(uuid "a9d49450-87f1-4dc9-a0c3-2c021c7a0714")
            		(effects
            			(font
            				(size 1 1)
            				(thickness 0.15)
            			)
            		)
            	)
            	(property "Datasheet" ""
            		(at 0 0 0)
            		(layer "F.Fab")
            		(hide yes)
            		(uuid "f09da2c1-3624-4ec3-9dcd-004bbe3aa377")
            		(effects
            			(font
            				(size 1.27 1.27)
            			)
            		)
            	)
            	(property "Description" ""
            		(at 0 0 0)
            		(layer "F.Fab")
            		(hide yes)
            		(uuid "68081595-2196-47d6-ad6d-bbef90308abc")
            		(effects
            			(font
            				(size 1.27 1.27)
            			)
            		)
            	)
            	(attr through_hole)
            	(duplicate_pad_numbers_are_jumpers no)
            	(fp_line
            		(start -7.4 -5.2)
            		(end -7.4 5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "4cb8fecc-eb86-4410-8fbf-f58ca2f4d8ce")
            	)
            	(fp_line
            		(start -5.2 -7.4)
            		(end -7.4 -5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "14939a2e-53e8-43e6-80d8-5e57333aba8b")
            	)
            	(fp_line
            		(start -5.2 -7.4)
            		(end -2.249997 -7.4)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "3bc491aa-02a2-4145-b5aa-ea1925dc0cac")
            	)
            	(fp_line
            		(start -5.2 7.4)
            		(end -7.4 5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "3fcd0249-0812-48df-aaca-e50e50ece793")
            	)
            	(fp_line
            		(start -5.2 7.4)
            		(end -1.4 7.4)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "747ec696-c043-44ee-88cf-11e4e90d29b2")
            	)
            	(fp_line
            		(start -4.999998 -5.150003)
            		(end -4 -4.150005)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "bf7ce0bc-6beb-4991-b89a-1594a390192c")
            	)
            	(fp_line
            		(start -4 -4.150005)
            		(end -4 3.049995)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "eb25e79a-96f6-44f1-9a56-f5cb8780b9bb")
            	)
            	(fp_line
            		(start -2.249997 -7.4)
            		(end 0 -5.150003)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "c322813a-7c53-4eb7-a99f-79e09c8e71de")
            	)
            	(fp_line
            		(start -1.425 7.4)
            		(end 0 5.975)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "74b995bf-93b4-445b-9c63-575c95372565")
            	)
            	(fp_line
            		(start 1.425 7.4)
            		(end 0 5.975)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "e4060e9b-bd20-4cfd-934b-1d59eaa025db")
            	)
            	(fp_line
            		(start 2.249997 -7.4)
            		(end 0 -5.150003)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "19598e85-d40b-4d1f-b00c-b9acb65902d8")
            	)
            	(fp_line
            		(start 4 -4.15)
            		(end 4 3.05)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "c99bebe9-2762-4c89-85eb-9cd57637cc66")
            	)
            	(fp_line
            		(start 4.999998 -5.149998)
            		(end 4 -4.15)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "62027ff2-0222-4501-bb85-a7642bc62a62")
            	)
            	(fp_line
            		(start 5.2 -7.4)
            		(end 2.249997 -7.4)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "69e170ad-87a3-460b-96ca-a13e2c027e9b")
            	)
            	(fp_line
            		(start 5.2 -7.4)
            		(end 7.4 -5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "86fb2642-3aaa-4097-a43a-3f6305d09f11")
            	)
            	(fp_line
            		(start 5.2 7.4)
            		(end 1.4 7.4)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "ee4f6bfe-fb13-40e0-ab8b-90f288e79c6b")
            	)
            	(fp_line
            		(start 5.2 7.4)
            		(end 7.4 5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "6c0fb8fb-1241-4b41-88a0-f6b528fd0bd4")
            	)
            	(fp_line
            		(start 7.4 -5.2)
            		(end 7.4 5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "F.Cu")
            		(uuid "b1aa2ff4-4cd0-4cc0-9d5f-1c88a9afd60b")
            	)
            	(fp_line
            		(start -7.4 -5.2)
            		(end -7.4 5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "17e68b90-9e8c-422d-be28-e2e969a17601")
            	)
            	(fp_line
            		(start -5.2 -7.4)
            		(end -7.4 -5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "2eb409a4-b45b-4ebb-82a6-e4d5ec57a2c1")
            	)
            	(fp_line
            		(start -5.2 -7.4)
            		(end -2.249997 -7.4)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "3f19cacf-e312-4dbd-b5f7-f71abf0f62b8")
            	)
            	(fp_line
            		(start -5.2 7.4)
            		(end -7.4 5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "7d1a0758-be25-46cb-b8fa-4084ce13e1e1")
            	)
            	(fp_line
            		(start -5.2 7.4)
            		(end -1.4 7.4)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "23f0598b-96d1-41fd-9e08-10b9b82a1cca")
            	)
            	(fp_line
            		(start -4.999998 -5.149993)
            		(end -4 -4.149995)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "f77f72d7-39ec-4234-bec4-fbf9f41017b5")
            	)
            	(fp_line
            		(start -4 -4.149995)
            		(end -4 3.050005)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "7881dfc8-1892-4813-854b-75506a019106")
            	)
            	(fp_line
            		(start -2.249997 -7.4)
            		(end 0 -5.150003)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "ce6d8ef7-bf70-49cb-b463-911a339efbb3")
            	)
            	(fp_line
            		(start -1.425 7.4)
            		(end 0 5.975)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "c4417f9e-f9c0-4b0a-9693-04d745250615")
            	)
            	(fp_line
            		(start 1.425 7.4)
            		(end 0 5.975)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "74acbafe-bf34-434c-914d-183dc623bd2b")
            	)
            	(fp_line
            		(start 2.249997 -7.4)
            		(end 0 -5.150003)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "1029cd60-cc98-4abb-bdd9-01ef989a7e3d")
            	)
            	(fp_line
            		(start 4 -4.15)
            		(end 4 3.05)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "ad006318-5d28-4349-9ba6-3d32c225c45e")
            	)
            	(fp_line
            		(start 4.999998 -5.149998)
            		(end 4 -4.15)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "055b11eb-6adf-4280-b4c9-5e54415bace5")
            	)
            	(fp_line
            		(start 5.2 -7.4)
            		(end 2.249997 -7.4)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "cc73542a-a0f8-4b27-81d8-d436c0e98e21")
            	)
            	(fp_line
            		(start 5.2 -7.4)
            		(end 7.4 -5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "2d27d842-f4db-4d13-a7f0-7fac27468812")
            	)
            	(fp_line
            		(start 5.2 7.4)
            		(end 1.4 7.4)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "7abd405b-ed12-4af6-89cc-ec1731ead81f")
            	)
            	(fp_line
            		(start 5.2 7.4)
            		(end 7.4 5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "1d0106c2-d3e5-4600-b875-1dabded87c26")
            	)
            	(fp_line
            		(start 7.4 -5.2)
            		(end 7.4 5.2)
            		(stroke
            			(width 0.4)
            			(type solid)
            		)
            		(layer "B.Cu")
            		(uuid "392a3ebc-394d-41c2-bcfa-67ca59a4ef7f")
            	)
            	(fp_line
            		(start -6.5 -5.5)
            		(end -6.5 -6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "b73ff7a6-10ea-4ee1-b2f7-4e8ef5abad20")
            	)
            	(fp_line
            		(start -6.5 -5.5)
            		(end -6.5 -6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "e28c2170-1e34-42f0-8359-be04ca97fcc7")
            	)
            	(fp_line
            		(start -6.5 6.5)
            		(end -6.5 5.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "120b3232-caca-4bab-a8b1-04c806c56f87")
            	)
            	(fp_line
            		(start -6.5 6.5)
            		(end -6.5 5.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "b0cc44ac-0484-406d-8118-01c0af7e9b71")
            	)
            	(fp_line
            		(start -6.5 6.5)
            		(end -5.5 6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "66c75a9a-f544-4ef2-82c8-78b1279c6abf")
            	)
            	(fp_line
            		(start -6.5 6.5)
            		(end -5.5 6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "b6e9f5d6-174e-4f79-a8ed-b69de29d3312")
            	)
            	(fp_line
            		(start -5.5 -6.5)
            		(end -6.5 -6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "446886ae-45e7-458e-b829-e06ec80570c1")
            	)
            	(fp_line
            		(start -5.5 -6.5)
            		(end -6.5 -6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "6df15b29-15ea-4ffe-a7ed-73cb62a57c68")
            	)
            	(fp_line
            		(start 5.5 6.5)
            		(end 6.5 6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "55355563-b943-4a53-8968-975a9d50c77a")
            	)
            	(fp_line
            		(start 5.5 6.5)
            		(end 6.5 6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "eeb29054-9115-4f40-b8cf-d261a9c010d8")
            	)
            	(fp_line
            		(start 6.5 -6.5)
            		(end 5.5 -6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "a908bf3e-6711-4629-8fac-6c08a3045869")
            	)
            	(fp_line
            		(start 6.5 -6.5)
            		(end 5.5 -6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "d135c49d-4682-4b01-afc6-66acab5c9701")
            	)
            	(fp_line
            		(start 6.5 -6.5)
            		(end 6.5 -5.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "072b7e9c-221b-4ae0-a566-cd65bfbf9003")
            	)
            	(fp_line
            		(start 6.5 -6.5)
            		(end 6.5 -5.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "b1d3b846-79db-47de-9b26-af2d988d2028")
            	)
            	(fp_line
            		(start 6.5 5.5)
            		(end 6.5 6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "b75c4bc6-aeb4-4cc6-b641-1a6fdf8bb807")
            	)
            	(fp_line
            		(start 6.5 5.5)
            		(end 6.5 6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "F.SilkS")
            		(uuid "ecc428df-4914-4dce-a954-d03086c99867")
            	)
            	(fp_line
            		(start -6.5 -6.5)
            		(end -6.5 -5.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "B.SilkS")
            		(uuid "87d98d1e-4753-46cc-b41f-a1c9889901de")
            	)
            	(fp_line
            		(start -6.5 -6.5)
            		(end -5.5 -6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "B.SilkS")
            		(uuid "7a73d6ed-08c6-4212-80b7-bf355e3f0603")
            	)
            	(fp_line
            		(start -6.5 5.5)
            		(end -6.5 6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "B.SilkS")
            		(uuid "7ec6a2e3-5fb1-47ac-a787-cfb576e68774")
            	)
            	(fp_line
            		(start -5.5 6.5)
            		(end -6.5 6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "B.SilkS")
            		(uuid "70761592-867a-4b84-8d79-523dc38932a6")
            	)
            	(fp_line
            		(start 5.5 -6.5)
            		(end 6.5 -6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "B.SilkS")
            		(uuid "3e65e14c-5d02-4de2-949d-3cd46ff8984f")
            	)
            	(fp_line
            		(start 6.5 -5.5)
            		(end 6.5 -6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "B.SilkS")
            		(uuid "deddc11b-9151-449d-b905-73ab541c5681")
            	)
            	(fp_line
            		(start 6.5 6.5)
            		(end 5.5 6.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "B.SilkS")
            		(uuid "360b3c97-29a3-40b7-bf27-499d874da8c9")
            	)
            	(fp_line
            		(start 6.5 6.5)
            		(end 6.5 5.5)
            		(stroke
            			(width 0.14)
            			(type solid)
            		)
            		(layer "B.SilkS")
            		(uuid "e53eb981-dd71-4184-b628-9d3189ce1e65")
            	)
            	(fp_poly
            		(pts
            			(xy 0.523457 -3.080847) (xy 0.865111 -3.002867) (xy 1.195886 -2.887124) (xy 1.511622 -2.735073) (xy 1.808348 -2.548628)
            			(xy 2.082333 -2.330132) (xy 2.330132 -2.082333) (xy 2.548628 -1.808348) (xy 2.735073 -1.511622) (xy 2.887124 -1.195886)
            			(xy 3.002867 -0.865111) (xy 3.080847 -0.523457) (xy 3.120084 -0.17522) (xy 3.120084 0.17522) (xy 3.080847 0.523457)
            			(xy 3.002867 0.865111) (xy 2.887124 1.195886) (xy 2.735073 1.511622) (xy 2.548628 1.808348) (xy 2.330132 2.082333)
            			(xy 2.082333 2.330132) (xy 1.808348 2.548628) (xy 1.511622 2.735073) (xy 1.195886 2.887124) (xy 0.901378 2.990176)
            			(xy 0.980536 3.099127) (xy 1.062461 3.259914) (xy 1.118225 3.431538) (xy 1.146455 3.609772) (xy 1.146455 3.790228)
            			(xy 1.118225 3.968462) (xy 1.062461 4.140086) (xy 0.980536 4.300873) (xy 0.874467 4.446865) (xy 0.746865 4.574467)
            			(xy 0.600873 4.680536) (xy 0.440086 4.762461) (xy 0.268462 4.818225) (xy 0.090228 4.846455) (xy -0.090228 4.846455)
            			(xy -0.268462 4.818225) (xy -0.440086 4.762461) (xy -0.600873 4.680536) (xy -0.746865 4.574467) (xy -0.874467 4.446865)
            			(xy -0.980536 4.300873) (xy -1.062461 4.140086) (xy -1.118225 3.968462) (xy -1.146455 3.790228) (xy -1.146455 3.609772)
            			(xy -1.118225 3.431538) (xy -1.062461 3.259914) (xy -0.980536 3.099127) (xy -0.901378 2.990176) (xy -1.195886 2.887124)
            			(xy -1.511622 2.735073) (xy -1.808348 2.548628) (xy -2.082333 2.330132) (xy -2.330132 2.082333) (xy -2.548628 1.808348)
            			(xy -2.735073 1.511622) (xy -2.887124 1.195886) (xy -3.002867 0.865111) (xy -3.080847 0.523457) (xy -3.120084 0.17522)
            			(xy -3.120084 -0.17522) (xy -3.080847 -0.523457) (xy -3.002867 -0.865111) (xy -2.887124 -1.195886)
            			(xy -2.735073 -1.511622) (xy -2.548628 -1.808348) (xy -2.330132 -2.082333) (xy -2.082333 -2.330132)
            			(xy -1.808348 -2.548628) (xy -1.511622 -2.735073) (xy -1.195886 -2.887124) (xy -0.865111 -3.002867)
            			(xy -0.523457 -3.080847) (xy -0.17522 -3.120084) (xy 0.17522 -3.120084)
            		)
            		(stroke
            			(width 0.1)
            			(type solid)
            		)
            		(fill no)
            		(layer "Edge.Cuts")
            		(uuid "32ee863a-3c18-4b12-91d1-a1bf13bbaef1")
            	)
            	(fp_rect
            		(start -8.25 -8.25)
            		(end 8.25 8.25)
            		(stroke
            			(width 0.05)
            			(type solid)
            		)
            		(fill no)
            		(layer "B.CrtYd")
            		(uuid "79c9eec3-ffea-43b2-887e-9d1341751a17")
            	)
            	(fp_rect
            		(start -8.25 -8.25)
            		(end 8.25 8.25)
            		(stroke
            			(width 0.05)
            			(type solid)
            		)
            		(fill no)
            		(layer "F.CrtYd")
            		(uuid "b4a648f9-e6c0-4368-8b65-3dc7c3c74e3a")
            	)
            	(fp_rect
            		(start -7.5 -7.5)
            		(end 7.5 7.5)
            		(stroke
            			(width 0.1)
            			(type solid)
            		)
            		(fill no)
            		(layer "B.Fab")
            		(uuid "15161277-c0aa-4f32-b0b7-de565dd77c4b")
            	)
            	(fp_rect
            		(start -7.5 -7.5)
            		(end 7.5 7.5)
            		(stroke
            			(width 0.1)
            			(type solid)
            		)
            		(fill no)
            		(layer "F.Fab")
            		(uuid "8b84c70e-dcf3-4806-a244-b0d96335ac13")
            	)
            	(fp_text user "${p.ref}"
            		(at 0 -8.5 ${p.r})
            		(unlocked yes)
            		(layer "B.Fab")
            		(uuid "e508d8e6-664d-4f73-a93d-9b039b0fc3ae")
            		(effects
            			(font
            				(size 1 1)
            				(thickness 0.15)
            			)
            			(justify mirror)
            		)
            	)
            	(fp_text user "${p.ref}"
            		(at 0 -8.5 ${p.r})
            		(unlocked yes)
            		(layer "F.Fab")
            		(uuid "622551f9-612e-4709-9a0c-0e7cde7b8d5b")
            		(effects
            			(font
            				(size 1 1)
            				(thickness 0.15)
            			)
            		)
            	)
            	(pad "" np_thru_hole circle
            		(at -5.5 0)
            		(size 1.7018 1.7018)
            		(drill 1.7018)
            		(layers "*.Cu" "*.Mask")
            		(uuid "18d49e30-9b67-488f-9f4e-c6a1b51bcc6c")
            	)
            	(pad "" np_thru_hole circle
            		(at 5.5 0)
            		(size 1.7018 1.7018)
            		(drill 1.7018)
            		(layers "*.Cu" "*.Mask")
            		(uuid "28337fc0-ba12-4d98-ba3c-9ed6b990f865")
            	)
            	(pad "1" thru_hole roundrect
            		(at 0 -5.150003 ${p.r})
            		(size 1.65 1.65)
            		(drill 1)
            		(layers "*.Cu" "*.Mask")
            		(remove_unused_layers no)
            		(roundrect_rratio 0.15)
            		(uuid "720bb2f4-5995-4ebd-8948-9e55f0543215")
            	)
            	(pad "1" thru_hole roundrect
            		(at 0 5.975 ${p.r + 180})
            		(size 2 2.15)
            		(drill oval 1.2 1.35)
            		(layers "*.Cu" "*.Mask")
            		(remove_unused_layers no)
            		(roundrect_rratio 0.125)
            		(uuid "97c24853-17c9-49df-8a0a-6a9914e5941e")
            	)
            	(pad "2" thru_hole roundrect
            		(at 4.565722 3.547363 ${p.r + 240})
            		(size 2 3)
            		(drill oval 1.27 2.27)
            		(layers "*.Cu" "*.Mask")
            		(remove_unused_layers no)
            		(roundrect_rratio 0.125)
            		(uuid "3d8871d9-c1a7-4e03-b1bf-8533e06affcf")
            	)
            	(pad "2" thru_hole roundrect
            		(at 5 -5.15 ${p.r})
            		(size 1.65 1.65)
            		(drill 1)
            		(layers "*.Cu" "*.Mask")
            		(remove_unused_layers no)
            		(roundrect_rratio 0.15)
            		(uuid "e58a8e4c-b31c-484a-a7c3-1a2a7c0689bc")
            	)
            	(pad "3" thru_hole roundrect
            		(at -4.999998 -5.150003 ${p.r})
            		(size 1.65 1.65)
            		(drill 1)
            		(layers "*.Cu" "*.Mask")
            		(remove_unused_layers no)
            		(roundrect_rratio 0.15)
            		(uuid "ebc31d6b-d749-4cb0-95b4-5fd5072582a8")
            	)
            	(pad "3" thru_hole roundrect
            		(at -4.566987 3.55 ${p.r + 120})
            		(size 2 3)
            		(drill oval 1.27 2.27)
            		(layers "*.Cu" "*.Mask")
            		(remove_unused_layers no)
            		(roundrect_rratio 0.125)
            		(uuid "2fd8756d-d0bd-4c45-bd14-ad69c5104635")
            	)
            	(embedded_fonts no)
            )
        `;
    }
};
