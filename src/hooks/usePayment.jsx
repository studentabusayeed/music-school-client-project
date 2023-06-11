import { useQuery } from "@tanstack/react-query";


const usePayment = () => {
    const {data: payment = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://music-school-server-project-studentabusayeed.vercel.app/payment');
            return res.json();
        }
    })

    return [payment, loading, refetch];
}

export default usePayment;