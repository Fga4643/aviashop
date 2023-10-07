import {useEffect, useState} from "react";

const SpareImage = ({spare_id}:{spare_id:number}) => {

	const [img, setImg] = useState<string>()

	const fetchImg = async () => {
		const response = await fetch(`http://127.0.0.1:8000/api/spares/${spare_id}/image`);

		const imageBlob = await response.blob()

		const imageObjectURL = URL.createObjectURL(imageBlob)

		setImg(imageObjectURL)
	}

	useEffect(() => {

		fetchImg()

	}, [])


	return (
		<img src={img}/>
	)
}

export default SpareImage;